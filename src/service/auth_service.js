import { firebaseAuth, googleProvider, githubProvider, twitterProvider } from './firebase';

class AuthService {
    login(providerName){
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout(){
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged){
        firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
          });
    }

    getProvider(providerName){
        switch(providerName){
            case'Google':
            return googleProvider;
            case'Github':
            return githubProvider;
            case'Twitter':
            return twitterProvider;
            default:
            throw new Error('not supported');
        }
    }
}

export default AuthService;