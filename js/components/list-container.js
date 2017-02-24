//Give the component two pieces of initial state:
//The text entered into the input (which should start as an empty string)
export default class FlashCard extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                    pieceOne: '',
                    pieceTwo: '',

                    //The cards contained in the list (which should start as an empty array)

                    this.cards = [];
                };



                //The render method should render a List component, passing in the array of cards from the state as the cards prop.
                //
                render() {
                    return ( < li FlashCard = {
                            classes
                        }
                        onClick = {
                            this.onClick
                        } >
                        < li FlashCard = "card-one" > {
                            this.props.name
                        } < /div> < li FlashCard = "card-two"
                        src = {
                            this.props.imageUrl
                        }
                        />

                        {
                            this.props.job
                        } < /div> < /div>
                    );
                    //Pass an onAddInputChanged callback to the List component via props. When this is called it should update the text property of the state.

                    onAddInputChanged() {

                        return ({ < div onClick = {
                                    props.onClick
                                }
                                style = {
                                    style
                                } > {
                                    props.text
                                }

                            );
                        });
                }



                //Pass an onAddSubmit callback to the List component via props. When this is called it should add the contents of the text property of the state to the array of cards in the state.

                onAddSubmit() {
                    if (this.state.selected === 'card-one') {
                        this.setState({
                            selected: 'one'
                        });
                    } else if (this.state.selected === 'card-two') {
                        this.setState({
                            selected: 'two'
                        });
                    }
                }

                //Update the Board component to render ListContainers rather than directly rendering Lists. You should now be able to add new cards to any of your lists.
                render() {
                        const ListContainers = {
                            card - one:
                                card - two:

                        };

                        return ( < div className = {
                                    classes
                                }
                                onClick = {
                                    this.onClick
                                } >
                                < div className = "card-one" > {
                                    this.props.card - one
                                } < /div> < div className = "person-two"
                                src = {
                                    this.props.card - two
                                }
                                /> < /div> < /div>


                                return ( < div onClick = {
                                        this.onCardClick
                                    }
                                    style = {
                                        style
                                    } > {
                                        this.state[this.state.selected]
                                    } < /div>
                                );
