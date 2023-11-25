export default function userId(props) {
    return (
      <div>
          <h1>{props.id}</h1>
      </div>
    )
  }

  export async function getServerSideProps(context){
    const { params } = context

    const userId = params.id

    return{
      props:{
        id: 'userid-' + userId,
      }
    }
  }