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