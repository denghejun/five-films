pipeline {
    agent {
      label 'master'
    }

    stages {
        stage('set npm version') {
            steps {
                sh 'nvm use 6.11.3'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'exp start -c'
            }
        }
    }
}
