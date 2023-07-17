import React from 'react'
import Item from '../Item/Item'

const Items = () => {
  // const CLIENT_ID = '5n0MkG8mZ6VVE6E4qQ-7woe-jtiKXUhzGYgEoHUMbjU'
  // const COUNT = 1

  // const getData = async () => {
  //   const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${COUNT}`
  //   const response = await fetch(url)
  //   if (response.ok) {
  //     const data = await response.json()
  //     return data
  //   }
  // }


  const testData = [
    {
      "id": "8Gf4rVyDkfU",
      "slug": "a-woman-walking-through-a-forest-on-a-sunny-day-8Gf4rVyDkfU",
      "created_at": "2023-07-04T19:41:59Z",
      "updated_at": "2023-07-17T05:39:54Z",
      "promoted_at": "2023-07-07T16:16:01Z",
      "width": 4160,
      "height": 6240,
      "color": "#26260c",
      "blur_hash": "LRD+bm~UNLNH^*?Gt7R-NLt7%2s:",
      "description": "Hiking and enjoying the sun.",
      "alt_description": "a woman walking through a forest on a sunny day",
      "breadcrumbs": [],
      "urls": {
        "raw": "https://images.unsplash.com/photo-1688499154258-b15ed38b0dc0?ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8&ixlib=rb-4.0.3",
        "full": "https://images.unsplash.com/photo-1688499154258-b15ed38b0dc0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1688499154258-b15ed38b0dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1688499154258-b15ed38b0dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8&ixlib=rb-4.0.3&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1688499154258-b15ed38b0dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8&ixlib=rb-4.0.3&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1688499154258-b15ed38b0dc0"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/a-woman-walking-through-a-forest-on-a-sunny-day-8Gf4rVyDkfU",
        "html": "https://unsplash.com/photos/a-woman-walking-through-a-forest-on-a-sunny-day-8Gf4rVyDkfU",
        "download": "https://unsplash.com/photos/8Gf4rVyDkfU/download?ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8",
        "download_location": "https://api.unsplash.com/photos/8Gf4rVyDkfU/download?ixid=M3w0NzYxMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk2MDMzNDl8"
      },
      "likes": 69,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "topic_submissions": {},
      "user": {
        "id": "Nqj3cE8Yfnk",
        "updated_at": "2023-07-16T10:22:22Z",
        "username": "danieljschwarz",
        "name": "Daniel J. Schwarz",
        "first_name": "Daniel J.",
        "last_name": "Schwarz",
        "twitter_username": "DanielJSchwarz_",
        "portfolio_url": null,
        "bio": "Photographer and Designer. 📸\r\nCurrently living in a van and traveling through Europe! 🚐\r\n",
        "location": "Austria",
        "links": {
          "self": "https://api.unsplash.com/users/danieljschwarz",
          "html": "https://unsplash.com/@danieljschwarz",
          "photos": "https://api.unsplash.com/users/danieljschwarz/photos",
          "likes": "https://api.unsplash.com/users/danieljschwarz/likes",
          "portfolio": "https://api.unsplash.com/users/danieljschwarz/portfolio",
          "following": "https://api.unsplash.com/users/danieljschwarz/following",
          "followers": "https://api.unsplash.com/users/danieljschwarz/followers"
        },
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1603099296368-7a6c514c2386image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          "medium": "https://images.unsplash.com/profile-1603099296368-7a6c514c2386image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          "large": "https://images.unsplash.com/profile-1603099296368-7a6c514c2386image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        "instagram_username": "danieljschwarz",
        "total_collections": 28,
        "total_likes": 1114,
        "total_photos": 374,
        "accepted_tos": true,
        "for_hire": true,
        "social": {
          "instagram_username": "danieljschwarz",
          "portfolio_url": null,
          "twitter_username": "DanielJSchwarz_",
          "paypal_email": null
        }
      },
      "exif": {
        "make": "Canon",
        "model": " EOS 6D Mark II",
        "name": "Canon, EOS 6D Mark II",
        "exposure_time": "1/800",
        "aperture": "3.5",
        "focal_length": "40.0",
        "iso": 100
      },
      "location": {
        "name": "Tivedens nationalpark, Sweden",
        "city": null,
        "country": "Sweden",
        "position": {
          "latitude": 58.717109,
          "longitude": 14.606503
        }
      },
      "views": 331218,
      "downloads": 2986
    }
  ]
  return (
    <section>
      {testData.map(data => <Item data={data} />)}
    </section>
  )
}

export default Items