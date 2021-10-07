import React, { useEffect, useState, memo } from 'react';

const areEquals = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props)  {
  const { loading } = props;
  const [tweet, setTweet] = useState();

  //componentDidMount
  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  }) 

  //componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate:loading', loading)
  }, [loading])

   //componentWillUnmount
   useEffect(() => {
    return () => {
      console.log('componentWillUnmount: foi removido :(')
    }
  }, [])

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  console.log('Tweet atualizado:', tweet)

    return (
      <div>
        <button onClick={handleTweet}>Re-render</button>
        teste
      </div>
    )

}

export default memo(Twitter, areEquals);
