import { Link } from 'react-router-dom';


const GitHub = () => {
    return(
        <div className='GitHub'>
            Follow the project on Github
            <p> </p>
            <Link to='https://github.com/FilipSly/Ochre'>
                Link Here
            </Link>
            <Link to='https://github.com/FilipSly/Ochre-Website'>
                Link to Ochre Website source code
            </Link>
        </div>
    )
}

export default GitHub