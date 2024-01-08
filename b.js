const a = {

    "지브리OST리스트" : [
          {
              "name" : "마녀배달부 키키",
              "song" : "따스함에 둘러쌓인다면"
          } ,
          {
              "name" : "하울의 움직이는 성",
              "song" : "세계의 약속 "
          }
      ]
  }
  
//   const b = JSON.parse(a)
  const b = JSON.stringify(a)

  console.log(a.지브리OST리스트)
  console.log(a.지브리OST리스트[0].name)
  console.log(a.지브리OST리스트[0] ["song"])
  console.log(typeof(a.지브리OST리스트))
  console.log(typeof(b))
