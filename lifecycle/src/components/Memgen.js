import React, { Component } from 'react'

class Memegen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    componentDidMount() {
        
         
    }
    handleSubmit = event => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].image
        this.setState({randomImg: randMemeImg})
    }
handleChange = event => {
    const {name, value} = event.target
    this.setState({ [name]: value})
}
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="topText"
                    placeholder="Title"
                    value={this.state.topText}
                    onChange={this.handleChange} />
                    <input
                    type="text"
                    name="bottomText"
                    placeholder="image"
                    // value={this.state.src={memes}}
                    onChange={this.handleChange} />
                    <button>Save Meeme</button>
                </form>
                <div className="meme">
                    <img
                    src={this.state.randomImg} alt="" width="100" height="100"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
           </div>
        )
    }
}
export default Memegen