import React, { Component } from 'react';

export default class Review extends Component {
    constructor (props) {
        super(props)
        this.state = {
          id: props.match.params.id,
          rc: [],
          r: []
        }
    }
    async componentDidMount() {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/rc/' + this.state.id);
          const rc = await res.json();
          this.setState({
            rc
          });
        } catch (e) {
          console.log(e);
        }
      }

    render() {
        return (  
            <main role="main">
                <section>
                    <div class="container mt-3 mb-3 d-flex">
                        <h3 class="highlight">{this.rc.title}</h3>
                        <h6 class="text-muted ml-3 mt-2 mb-1">1 Aug 2018</h6>
                    </div>
                </section>

                <div class="container">
                    <div class="row">
                        <div class="col-9 shadow-sm">
                            <img src="img/hero_dog-days-2018.jpg" class="img-fluid mt-3 mb-3" alt="Dog Days screencap"/>
                            <div class="d-flex mb-2 justify-content-between align-items-center">
                                <div>
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                                <small class="text-muted">August 8, 2018</small>
                            </div>
                            <div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum diam quis leo hendrerit, quis iaculis arcu maximus. Vivamus at lectus in ex euismod auctor vitae sit amet tortor. Curabitur mi nisi, volutpat vitae libero pulvinar, pharetra porta turpis. Maecenas consequat tincidunt lacus suscipit eleifend. Mauris non semper mi. In fermentum euismod purus, vitae consequat arcu lacinia sit amet. Donec finibus tincidunt elit, eget malesuada risus bibendum consectetur. Fusce ligula urna, elementum ut condimentum vitae, imperdiet nec erat. In hendrerit sem augue, in molestie lectus laoreet a. In hac habitasse platea dictumst. Sed nec ornare nunc.</p>
                                    
                                    <p>Sed viverra auctor mauris. Etiam accumsan vitae dolor id venenatis. In hac habitasse platea dictumst. Integer augue odio, semper ac efficitur quis, sollicitudin a massa. Cras porttitor finibus velit vitae mollis. Donec lectus quam, imperdiet quis dolor sit amet, pharetra malesuada justo. Praesent varius nec diam at posuere. Vestibulum ornare nibh vitae erat egestas, a bibendum risus laoreet. Nulla elementum posuere interdum. Praesent sit amet nulla et tellus lacinia suscipit. Vivamus in sem at turpis pharetra facilisis. Sed faucibus elementum tellus, vel sagittis ante porta ullamcorper. Aenean feugiat tincidunt velit vel porta. Nulla tempor ante molestie risus vulputate hendrerit.</p>
                                    
                                    <p>Aenean fermentum aliquam bibendum. Nunc lacinia lectus eleifend quam volutpat molestie. Etiam sodales felis mi, at placerat metus rutrum non. Pellentesque vitae velit dignissim, convallis velit in, vehicula felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae malesuada eros. Curabitur accumsan velit dui, in finibus nibh dapibus quis. Duis placerat a lorem sit amet lacinia. Quisque gravida malesuada lacus, non sodales augue consequat eu. In venenatis vehicula sollicitudin. Suspendisse a consequat nulla. Aenean eros justo, maximus non est eget, gravida blandit libero. In quis hendrerit mi.</p>
                                    
                                    <p>Phasellus metus libero, hendrerit ac tellus hendrerit, blandit tempor ligula. Aliquam eros risus, interdum luctus est in, sodales hendrerit dolor. Morbi pulvinar sed tellus at laoreet. Nunc nec elit quis lectus varius vestibulum. Quisque dui sapien, tempus quis justo sit amet, luctus eleifend neque. Suspendisse scelerisque orci non dui consectetur ultricies. Vivamus sed nisi tellus. Sed posuere eget felis sit amet hendrerit. Maecenas consectetur lectus nec lorem volutpat tincidunt. Sed ac fringilla nunc, eu suscipit ante. Donec ut nisl nisl. Vivamus vel sollicitudin quam. Morbi vestibulum libero ut dui fermentum molestie. Duis sagittis metus mi, in maximus diam mollis vel. Ut rhoncus volutpat mauris, sit amet posuere magna mollis ac. Nulla suscipit magna ac nisi malesuada, nec consectetur dui porta.</p>
                                    
                                    <p>Aliquam ut varius lorem, eget commodo nibh. Maecenas pulvinar imperdiet turpis id cursus. Mauris dignissim eleifend augue eget congue. Cras consequat urna purus, eu viverra odio efficitur sit amet. Donec ullamcorper luctus venenatis. Duis metus nulla, feugiat elementum euismod at, tempus vel libero. Duis volutpat finibus est, at consectetur leo laoreet sed. Curabitur convallis vel urna non auctor. Phasellus vel commodo libero, sed vehicula magna. Nam consectetur tortor vestibulum varius volutpat. Cras magna magna, tincidunt scelerisque massa mattis, porttitor tincidunt dui. Etiam ultricies ligula eget dolor dignissim, nec porta nulla suscipit. Mauris eu placerat ligula. Etiam euismod ligula eget sapien pulvinar ornare non eget massa. Quisque rhoncus ipsum eu libero imperdiet euismod. Integer imperdiet, nibh eget elementum porta, dui nisi tempor nibh, sed feugiat est ligula id neque.</p> 
                                </div>
                        </div>
                        <div class="col-3 shadow-sm">
                            <img src="img/large_dog-poster.jpg" class="img-fluid mt-3" alt="Dog Days poster"/>
                        </div>
                    </div>
                </div>

                </main>
        )
    }
}