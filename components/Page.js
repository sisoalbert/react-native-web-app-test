// **
//  * Copyright (c) 2015-present, Facebook, Inc.
//  * All rights reserved.
//  *
//  * This source code is licensed under the BSD-style license found in the
//  * LICENSE file in the root directory of this source tree. An additional grant
//  * of patent rights can be found in the PATENTS file in the same directory.
//  *
//  * @providesModule RNTesterPage
//  * @flow
//  */

/* eslint-disable no-use-before-define */

import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Title from "./Title";

export default class Page extends React.Component {
  render() {
    let ContentWrapper;
    const wrapperProps = {};
    if (this.props.noScroll) {
      ContentWrapper = View;
    } else {
      ContentWrapper = ScrollView;
      // $FlowFixMe found when converting React.createClass to ES6
      wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
      wrapperProps.keyboardShouldPersistTaps = "handled";
      wrapperProps.keyboardDismissMode = "interactive";
    }
    const title = this.props.title ? <Title title={this.props.title} /> : null;
    const spacer = this.props.noSpacer ? null : <View style={styles.spacer} />;
    return (
      <View style={styles.container}>
        {title}
        <ContentWrapper style={styles.wrapper} {...wrapperProps}>
          {this.props.children}
          {spacer}
        </ContentWrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9eaed",
    flex: 1,
    maxWidth: 600,
    margin: "auto",
    width: "100%",
  },
  spacer: {
    height: 270,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
  },
});
