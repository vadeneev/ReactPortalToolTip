pipeline {
  agent any
  stages {
    stage('install') {
      parallel {
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
  }
}