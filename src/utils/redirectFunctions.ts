class Routes {
  router: any;

  constructor(router: any) {
    this.router = router;
  }

  redirectToSignInPage() {
    return this.router.push('/');
  }

  redirectToSignUpPage() {
    return this.router.push('/signUp');
  }

  redirectToHomePage() {
    return this.router.push('/home');
  }

  redirectToProfilePage() {
    return this.router.push('/userProfile');
  }

  redirectToTweetPage() {
    return this.router.push('/compose/tweet');
  }

  redirectToErrorPage() {
    return this.router.push('/error');
  }

  redirectToEditProfilePage() {
    return this.router.push('/userProfile/edit');
  }
}

export default Routes;
