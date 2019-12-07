const shell = require("shelljs");

async function run_js_tests(projectPath) {
  const output = await shell.exec(
    `PROJECT_PATH=${projectPath} /bin/sh -c './run_js_tests.sh'`
  ).stdout;
  return output;
}

function main() {
  run_js_tests("js_working_code_under_test").then(value => {
    console.log("running the WORKING js tests");
    console.log(`<CAPTURED_STD_OUT>${value}</CAPTURED_STD_OUT>\n`);
  });

  run_js_tests("js_broken_code_under_test").then(value => {
    console.log("running the BROKEN js tests");
    console.log(`<CAPTURED_STD_OUT>${value}</CAPTURED_STD_OUT>\n`);
  });
}

main();
