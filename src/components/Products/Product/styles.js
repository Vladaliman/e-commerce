import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
    root: {
        maxWidth: '100%',
      },
      media: {
        height: 0,
        maxWidth: '60%',
        paddingTop: '56.25%', // 16:9
        marginLeft: '20%'
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      
}))