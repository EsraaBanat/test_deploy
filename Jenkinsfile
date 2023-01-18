pipeline {
  agent any 
  stages {
    stage('Pre Build') {
      steps {
        echo(" Pre Build Stage")
        sh "ls -l -a"
      }
    }
    stage('Build') {
      steps {
        echo("Build Stage") 
        sh "echo 'we are testing jenkins commands'"
        sshPublisher(
            continueOnError: false, failOnError: true,
            publishers: [
                sshPublisherDesc(
                configName: "esraa_server",
                verbose: true,
                transfers: [
                sshTransfer(
                        execCommand:"cd /var/www/ && rm -rf test_deploy"
                    ),
                    sshTransfer(
                        sourceFiles: "**/*",
                        remoteDirectory: "test_deploy",
                        execCommand:"cd /var/www/test_deploy && sudo npm i"
                )
             ])
            ])
      }
    }
    stage('Test') {
      steps {
        echo("Test Stage")
      }
    }
    stage('Deploy') {
      steps {
        echo("Deploy")
        sshPublisher(
            continueOnError: false, failOnError: true,
            publishers: [
                sshPublisherDesc(
                configName: "dev server",
                verbose: true,
                transfers: [
               sshTransfer(
                        execCommand: "cd /var/www/test_deploy && pm2 start"
                         )
                ])
            ])
      }
    }
    stage('docker build') {
      steps {
        echo("docker build")
      }
    }
    stage('Post Build') {
      steps {
        echo("Post Build Stage")
      }
    }
  }
}