import { rapidApiOptions, rapidApiUrl, rapidTitleData, rapidCastData, rapidCreatorData } from '../api/api.js'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MediaDetails from '../components/MediaDetails'

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null)
  const [cast, setCast] = useState(null)
  const [creators, setCreators] = useState(null)
  const [directors, setDirectors] = useState(null)

  const fetchData = () => {
    fetch(`${rapidApiUrl}/${id}?${rapidTitleData}`, rapidApiOptions)
      .then(response => response.json())
      .then((data) => {
        setData(data.results)
      })
      .catch(err => console.error(err))
  }

  const fetchCast = () => {
    fetch(`${rapidApiUrl}/${id}?${rapidCastData}`, rapidApiOptions)
      .then(response => response.json())
      .then((results) => {
        setCast(results.results.cast.edges)
      })
      .catch(err => console.error(err))
  }

  const fetchCreators = () => {
    fetch(`${rapidApiUrl}/${id}?${rapidCreatorData}`, rapidApiOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("opsssssie")
        }
        return response.json()
      })
      .then((results) => {
        const { creators } = results.results;
        const value = creators.length ? creators[0]?.credits : null

        setCreators(value)
      })
      .catch(err => console.error(err))
  }
  const fetchDirectors = () => {
    fetch(`${rapidApiUrl}/${id}?${rapidCreatorData}`, rapidApiOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("opsssssie")
        }
        return response.json()
      })
      .then((results) => {
        setDirectors(results.results.directors[0].credits)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchData()
    fetchCast()
    fetchCreators()
    fetchDirectors()
  }, [id])

  return (
    <div>

      { data && (
        <MediaDetails data={ data } cast={ cast } creators={ creators } directors={ directors } />
      ) }
    </div>
  )
}
export default DetailsPage;
