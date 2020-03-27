import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';
import Header from '../ui-components/header/header';
import Navigator from '../ui-components/navigator/navigator';
import theme, { appStyles, drawerWidth } from '../ui-components/theme';

interface ImoodliAppProps {
  classes: any;
}

interface ImoodliAppState {
  mobileOpen: boolean;
  user: firebase.User;
}

class MoodliApp extends App<ImoodliAppProps, ImoodliAppState> {
  public state = {
    mobileOpen: false,
    user: null
  };

  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    // firebase.analytics().setAnalyticsCollectionEnabled(true);
    // firebase.analytics().logEvent('notification_received');
  }

  public render() {
    const { Component, pageProps, classes, router } = this.props;
    const user = this.state.user;

    return (
      <>
        <Head>
          <title>Moodli</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer}>
              <Hidden smUp={true} implementation='js'>
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  route={router.route}
                  variant='temporary'
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                />
              </Hidden>
              <Hidden xsDown={true} implementation='css'>
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  route={router.route}
                />
              </Hidden>
            </nav>
            <div className={classes.appContent}>
              <Header
                title='moodli'
                onDrawerToggle={this.handleDrawerToggle}
                user={user}
              />
              <main className={classes.mainContent}>
                <Component {...pageProps} />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </>
    );
  }

  private handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !this.state.mobileOpen }));
  };
}

export default withRouter(withStyles(appStyles)(MoodliApp));
