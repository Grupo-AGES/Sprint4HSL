import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, FlatList, Image, View, Dimensions } from 'react-native'

function Carousel() {
  const flatlistRef = useRef<FlatList | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const screenWidth = Dimensions.get("window").width

  const localStyles = StyleSheet.create({
    imgCarousel: {
      height: 200,
      width: screenWidth-10,
      borderRadius: 60,
      marginTop: 30
    }
  })

  function getItemLayout(data: any, index: number) {
    return {
      length: screenWidth,
      offset: screenWidth * index,
      index: index
    }
  }

  const carouselData = [
    {
      id: '1',
      image: require("../../../assets/slide1.jpg")
    },
    {
      id: '2',
      image: require("../../../assets/slide2.jpg")
    },
    {
      id: '3',
      image: require("../../../assets/slide3.jpg")
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true
        })
        setActiveIndex(0)
      } else {
        flatlistRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true
        })
        setActiveIndex(activeIndex + 1)
      }
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [activeIndex, carouselData])

  function handleManualScroll(index: number) {
    if (index >= 0 && index < carouselData.length) {
      flatlistRef.current?.scrollToIndex({
        index,
        animated: true
      })
      setActiveIndex(index)
    }
  }

  function renderItem({ item, index }: { item: { id: string, image: any }, index: number }) {
    return (
      <View onTouchEnd={() => handleManualScroll(index)}>
        <Image source={item.image} style={localStyles.imgCarousel} />
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
      />
    </View>
  )
}

export default Carousel