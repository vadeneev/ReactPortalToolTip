pipeline {
  agent {
    node {
      label 'build check'
    }

  }
  stages {
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
  }
}