pipeline {
    agent {
    label: 'master'
    }

    stages {
        stage('Build') {
            steps {
                echo 'npm --version'
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
