import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';
import firebase from '../firebase';
import theme, { appStyles } from '../ui-components/theme';

interface ImoodliAppProps {
  classes: any;
}

interface ImoodliAppState {
  mobileOpen: boolean;
}

class MoodliApp extends App<ImoodliAppProps, ImoodliAppState> {
  public state = {
    mobileOpen: false
  };

  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    firebase.analytics().setAnalyticsCollectionEnabled(true);
    firebase.analytics().logEvent('notification_received');
  }

  public render() {
    const { Component, pageProps, classes, router } = this.props;
    return (
      <>
        <Head>
          <title>Moodli</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <div className={classes.root}>
            <CssBaseline />
            <div className={classes.appContent}>
              <main className={classes.mainContent}>
                <Component {...pageProps} />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default withRouter(withStyles(appStyles)(MoodliApp));
