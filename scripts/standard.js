import { execSync } from 'child_process'
import { Octokit } from '@octokit/rest'
import { exit, env } from 'process'

try {
  execSync('npx ts-standard --fix', {
    stdio: 'inherit'
  })
} catch {}

try {
  execSync('git diff --quiet')
  exit(0)
} catch {}

const octokit = new Octokit({
  auth: env.GITHUB_TOKEN
})

const [owner, repo] = env.GITHUB_REPOSITORY.split('/')
const base = env.GITHUB_BASE_REF || env.GITHUB_REF_NAME
const branch = 'ts-standard/autofix'

const trigger = (env.GITHUB_SHA || '').trim()
const sha = trigger ? trigger.slice(0, 7) : 'unknown'

execSync(`git checkout -B ${branch}`)
execSync('git config user.email "github-actions[bot]@users.noreply.github.com"')
execSync('git config user.name "github-actions[bot]"')
execSync('git add .')
execSync('git commit -m "Apply ts-standard --fix"')
execSync('git rebase master')
execSync(`git push origin ${branch}`)

const {
  data: existingPRs
} = await octokit.pulls.list({
  owner,
  repo,
  state: 'open',
  head: `${owner}:${branch}`,
  base
})

if (existingPRs.length > 0) {
  const pr = existingPRs[0]
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: pr.number,
    body: `Updated with latest ts-standard fixes (${sha}).\n\nTriggered by: ${trigger || 'unknown'}`
  })

  exit(0)
}

await octokit.pulls.create({
  owner,
  repo,
  title: `ts-standard (${sha})`,
  head: branch,
  base,
  body: `Automated fixes from ts-standard --fix\n\nTriggered by: ${trigger || 'unknown'}`
})
