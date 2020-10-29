import blue from '@material-ui/core/colors/blue';

export default theme => ({
    root: {
        boxShadow: 'none',
        minHeight: 40,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[900],
    },
    toolbarRoot: {
        height: 40,
        minHeight: 0,
        paddingLeft: 0,
    },
    logo: {
        height: '100%',
        marginRight: 12,
    },
    text: {
        textTransform: 'uppercase',
    },
    appNameLabel: {
        minWidth: '130px',
    },
    grow: {
        flexGrow: 1,
    },
    avatar: {
        width: 32,
        height: 32,
        fontSize: '0.9rem',
        backgroundColor: blue[800],
    },
    menuButton: {
        color: 'white',
    },
    treeView: {
        minWidth: 280,
    },
    parentTreeItem: {
        '& > div.MuiTreeItem-content > div.MuiTreeItem-label': {
            fontWeight: 'bold',
        },
    },
    firstTreeItem: {
        marginTop: theme.spacing(1),
    },
    treeItem: {
        '& .MuiTreeItem-label': {
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5),
        },
    },
    drawer: {
        marginTop: 40,
        '& .MuiBackdrop-root': {
            marginTop: 40,
        },

        '& .MuiDrawer-paper': {
            marginTop: 40,
        },
    },
});
