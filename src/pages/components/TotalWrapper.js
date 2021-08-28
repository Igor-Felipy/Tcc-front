export default function TotalWrapper(props) {
    return (
        <div style={styles.total}>
            {props.children}
        </div>
    )
}


const styles = {
    total:{
      display:'flex',
      flex:'1',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-between'
    },
}