const { exec } = require('child_process');

// Replace 'HelloWorld.jar' with the path to your JAR file
const jarFile = 'HelloWorld.jar';

// Execute the JAR file using the `java -jar` command
exec(`java -jar ${jarFile}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing JAR file: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  // Print the output of the JAR file
  console.log(`stdout: ${stdout}`);
});
