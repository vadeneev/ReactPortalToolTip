pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'npm ci'
        sh 'npm build'
      }
    }
  }
}