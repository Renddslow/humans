import readPkgUp from 'read-pkg-up';
import sade from 'sade';
import { cosmiconfig } from 'cosmiconfig';
import catchify from 'catchify';

(async () => {
  const { packageJson } = await readPkgUp();

  const prog = sade('humans').version(packageJson.version).describe('');

  prog
    .command('init')
    .option('--here', 'Create project files in the current directory')
    .action((opts) => {
      console.log(`✅ .humansrc created with stub data`);
    });

  prog.command('resolve').action(async () => {
    const explorer = cosmiconfig(packageJson.name);

    const [err, result] = await catchify(explorer.search());

    if (result === null && !err) {
      console.error('');
      process.exit(1);
    }

    if (err) {
      console.error(err);
      process.exit(1);
    }

    const { config } = result;
  });

  prog.parse(process.argv);
})();
