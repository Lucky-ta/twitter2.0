import { useRouter } from 'next/router';
import React from 'react';
import { ErrorPageParagraph, ErrorPageSpan, ErrorPageWarning } from '../components/Error';
import { TweetCardPageContainer } from '../components/Tweet';
import Routes from '../utils/redirectFunctions';

function ErrorPage() {
  const router = useRouter();
  const redirect = new Routes(router);

  return (
    <TweetCardPageContainer>
      <ErrorPageWarning>Ops!</ErrorPageWarning>
      <ErrorPageParagraph>
        Talvez ou seu token de acesso tenha expirado...
      </ErrorPageParagraph>
      <ErrorPageParagraph>
        Faça o login novamente clicando no link abaixo.
      </ErrorPageParagraph>

      <ErrorPageSpan onClick={() => redirect.redirectToSignInPage()}>Login</ErrorPageSpan>
    </TweetCardPageContainer>
  );
}

export default ErrorPage;
