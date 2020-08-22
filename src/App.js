import React,{Component} from "react"
import styles from "./App.module.css"
import {Cards,Charts,CountryPicker} from "./components"
import {fetchData} from "./api/index"
import corona from "./image/image.png"


class App extends Component{    
    
    state={
        data:{},
        country:"",
    }

    async componentDidMount(){ 
        const fetchedData = await fetchData()
        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country)
        this.setState({data:fetchedData,country:country})
    }

    render(){
        const { data, country } = this.state
        console.log(data)
        
        return (
            <div className={styles.container}>
                <img className={styles.image} src={corona} />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App
