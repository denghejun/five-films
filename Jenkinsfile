pipeline {
    agent {
      label 'master'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install -g exp'
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
