pipeline {
    agent {
    
      label 'master'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
