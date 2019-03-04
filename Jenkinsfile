pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}