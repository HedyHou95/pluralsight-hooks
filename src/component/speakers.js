import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo} from 'react';
import { Header } from "./header";
import { Menu } from "./menu";
import { ConfigContext } from '../App'
import SpeakerDetail from './speakerDetail'
import speakerData from './speakerData'

import speakersReducer from './speakersReducer'

const Speakers = ()=> {
	// const [speakerList, setSpeakerList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [speakingSaturday, setSpeakingSaturday] = useState(true)
	const [speakingSunday, setSpeakingSunday] = useState(true)
  const context = useContext(ConfigContext)

  // function speakersReducer(state, action) {
  //   function updateFavorite(favoriteValue) {
  //     return state.map((item)=>{
  //       if(item.id === action.sessionId) {
  //         return {...item, favorite: favoriteValue}
  //       }
  //       return item
  //     })
  //   }

  //   switch(action.type) {
  //     case 'setSpeakerList': 
  //           return action.data;
  //     case 'favorite': 
  //           return updateFavorite(true)
  //     case 'unfavorite': 
  //           return updateFavorite(false)
  //     default: 
  //           return state
  //   }
  // }

  const [speakerList, dispatch] = useReducer(speakersReducer,[])

	useEffect(()=>{
		setIsLoading(true);
		new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			}, 1000)
		}).then(()=>{
			setIsLoading(false)

      const speakerListServerFilter = speakerData.filter(({sat, sun})=>{
        return (speakingSaturday && sat) || (speakingSunday && sun) 
      })

      // setSpeakerList(speakerData);

      dispatch({
        type: 'setSpeakerList',
        data: speakerListServerFilter
      })
		})

		return ()=>{
			console.log('cleanup')
		}
	},[])

	const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const newSpeakerList = useMemo(()=>{
    return speakerList.filter(({sat,sun})=>{
      return (speakingSaturday && sat) || (speakingSunday && sun) 
    }).sort((a, b)=>{
      if(a.firstName < b.firstName) {
        return -1
      }

      if(a.firstName > b.firstName) {
        return 1
      }
      return 0;
    })
  }, [speakingSaturday, speakingSunday, speakerList])

  const speakerListFiltered = isLoading ? [] : newSpeakerList


	const heartFavoriteHandler = useCallback((e,favoriteValue)=>{
		e.preventDefault();
		const sessionId = parseInt(e.target.attributes['data-sessionid'].value)
    dispatch({
      type: favoriteValue === true ? 'favorite': 'unfavorite',
      sessionId: sessionId
    })
	},[])

	if(isLoading) return <div>Loading...</div>

	return(
		<div>
			<Header></Header>
			<Menu></Menu>
			<div className="container">
				<div className="btn-toolbar  margintopbottom5 checkbox-bigger">
        {
          context.showSpeakerSpeakingDays === false ? null : (
             <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )
        }
        </div>
				<div className="row">
					<div className="card-deck">
					{speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite}) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              }
            )}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Speakers;