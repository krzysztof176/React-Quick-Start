import React from 'react';

// Additional Packages
import PropTypes from 'prop-types';
import _ from 'lodash';

// Material UI
import {AppBar, Toolbar, Typography, Avatar, withStyles, IconButton, Drawer, Divider} from '@material-ui/core';
import {Menu, ExpandMore, ChevronRight} from '@material-ui/icons';
import {TreeView, TreeItem} from '@material-ui/lab';

// Styles
import styles from './index.styles';

// Images
import ReactLogo from '../../../public/images/png/React Logo 64.png';

class GlobalNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuVisible: false,
            treeViewExpanded: [''],
        };
    }

    setMenuVisible = (visible) => () => this.setState({menuVisible: visible});

    onLabelClick = (screenName) => () => {
        const {onScreenSelection} = this.props;
        onScreenSelection(screenName);
        this.setState({menuVisible: false});
    };

    onIconClick = (nodeId) => () => {
        const {treeViewExpanded} = this.state;
        let treeViewExpandedDeepClone = _.cloneDeep(treeViewExpanded);

        if (_.findIndex(treeViewExpandedDeepClone, (id) => id === nodeId) === -1) {
            treeViewExpandedDeepClone.push(nodeId);
        } else {
            treeViewExpandedDeepClone = _.filter(treeViewExpandedDeepClone, (id) => id !== nodeId);
        }
        this.setState({treeViewExpanded: treeViewExpandedDeepClone});
    };

    generateTreeItems = (availableScreens, firstTreeItem) => {
        const {classes} = this.props;

        return availableScreens.map((availableScreen, index) => (
            [
                (
                    <TreeItem
                        key={`${availableScreen.componentName}_treeItem`}
                        nodeId={availableScreen.componentName}
                        label={availableScreen.displayName}
                        className={`${classes.treeItem} ${availableScreen.parent ? classes.parentTreeItem : ''} ${firstTreeItem && index === 0 ? classes.firstTreeItem : ''}`}
                        onIconClick={this.onIconClick(availableScreen.componentName)}
                        onLabelClick={availableScreen.component ? this.onLabelClick(availableScreen.componentName) : this.onIconClick(availableScreen.componentName)}
                    >
                        {this.generateTreeItems(availableScreen.children, false)}
                    </TreeItem>
                ),
                availableScreen.component ? null : (
                    <Divider key={`${availableScreen.componentName}_divider`} />
                ),
            ]
        ));
    };

    render() {
        const {classes, appName, selectedScreenProperties, error, availableScreens} = this.props;
        const {menuVisible, treeViewExpanded} = this.state;

        return (
            <AppBar
                position="static"
                color="primary"
                classes={{
                    root: classes.root,
                    colorPrimary: classes.colorPrimary,
                }}
            >
                <Toolbar classes={{root: classes.toolbarRoot}}>
                    <IconButton
                        className={classes.menuButton}
                        onClick={this.setMenuVisible(!menuVisible)}
                    >
                        <Menu />
                    </IconButton>

                    <img src={ReactLogo} alt="" className={classes.logo} />

                    <Typography
                        className={`${classes.text} ${classes.appNameLabel}`}
                        variant="body2"
                        color="inherit"
                    >
                        {`${appName} - ${selectedScreenProperties.displayName}`}
                    </Typography>

                    <div className={classes.grow} />
                    <Avatar
                        className={classes.avatar}
                    />
                </Toolbar>

                {
                    !error ? (
                        <Drawer
                            anchor="left"
                            open={menuVisible}
                            onClose={this.setMenuVisible(false)}
                            className={classes.drawer}
                        >
                            <TreeView
                                className={classes.treeView}
                                defaultCollapseIcon={<ExpandMore />}
                                defaultExpandIcon={<ChevronRight />}
                                expanded={treeViewExpanded}
                            >
                                {this.generateTreeItems(availableScreens, true)}
                            </TreeView>
                        </Drawer>
                    ) : null
                }
            </AppBar>
        );
    }
}

GlobalNavbar.defaultProps = {
    error: undefined,
};

GlobalNavbar.propTypes = {
    classes: PropTypes.object.isRequired,

    // Passed Props
    appName: PropTypes.string.isRequired,
    availableScreens: PropTypes.array.isRequired,
    selectedScreenProperties: PropTypes.object.isRequired,
    onScreenSelection: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default withStyles(styles)(GlobalNavbar);
