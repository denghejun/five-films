pipeline {
    agent {
      label 'master'
    }

    stages {
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
                sh 'exp login -u hejun -p qq5802248'
                sh 'exp start -c'
            }
        }
    }
}
