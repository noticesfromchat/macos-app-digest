# One-time automation setup

The weekly workflow runs every Friday at 8:00 AM Pacific during daylight saving time. It researches 10–12 current Mac app stories, adds a new issue to `content/issues.json`, commits it to `main` and lets GitHub Pages publish the result.

## Required secret

1. Create an OpenAI API key at https://platform.openai.com/api-keys.
2. In this GitHub repository, open **Settings → Secrets and variables → Actions**.
3. Choose **New repository secret**.
4. Name it `OPENAI_API_KEY` and paste the key as its value.

API use is billed separately from a ChatGPT subscription.

## Allow the workflow to commit

1. Open **Settings → Actions → General** in the repository.
2. Under **Workflow permissions**, select **Read and write permissions**.
3. Save the change.

## Test it

Open **Actions → Publish weekly Mac App Digest → Run workflow**. If today’s issue already exists, the workflow exits safely without creating a duplicate.

## Schedule

The schedule is stored in `.github/workflows/weekly-digest.yml` as `0 15 * * 5`. GitHub schedules use UTC, so this is 8:00 AM Pacific during daylight saving time and 7:00 AM during standard time.
