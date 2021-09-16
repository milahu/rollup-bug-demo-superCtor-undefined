import { buildDepTree, LockfileType } from 'snyk-nodejs-lockfile-parser';

async function main() {
  const deptree = await buildDepTree(
    '{}',
    '{}',
    false,
    LockfileType.npm,
    true,
  );
}

main()

