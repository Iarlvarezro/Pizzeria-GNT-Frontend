import {fork} from 'child_process';
import path from 'path';

export function run({name}) {
  let proc;
  return {
    name: 'run',
    writeBundle(outputOptions, bundle) {
      const chunk = Object.values(bundle).find((chunk) => {
        return chunk.isEntry && chunk.name === name;
      });
      if (!chunk) {
        return;
      }
      proc && proc.kill();
      proc = fork(path.join(outputOptions.dir, chunk.fileName));
    },
  };
}