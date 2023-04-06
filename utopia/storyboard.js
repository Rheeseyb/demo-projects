import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import {
  DecorativeLines,
  Checkerboard,
} from '/src/cardcomponents/decorations.js'
import { Description } from '/src/cardcomponents/description.js'
import { Name } from '/src/cardcomponents/name.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Profile } from '/src/profile.js'
import { Ode } from '/src/ode.js'
import { DiscoverActivities } from '/src/discoveractivities.js'
import {
  AquaMan,
  Wonderer,
  Cryophile,
  BirbWatcher,
  RiskTaker,
  Tropicologist,
} from '/src/stickers.js'
import { CategoryItem } from '/src/category-item.js'

const people = [
  {
    name: 'McKayla Lankau',
    location: 'New York City, USA',
    born: '1999',
    level: 'Supreme',
    image: './assets/mckayla.jpeg',
  },
  {
    name: 'Balazs Bajorics',
    location: 'Budapest, Hungary',
    born: '1988',
    level: 'Marvelous',
    image: './assets/balazs.jpeg',
  },
  {
    name: 'Rheese Burgess',
    location: 'Kent, UK',
    born: '1986',
    level: 'Excellent',
    image: './assets/rheese.jpeg',
  },
]

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 834,
        height: 2188,
      }}
      data-label='Discover List'
    >
      <DiscoverActivities />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 0,
        top: 2350,
        width: 834,
        height: 642,
      }}
      data-label='Ode To This App'
    >
      <Ode />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 848,
        position: 'absolute',
        left: 850,
        top: 0,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile person={people[0]} />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 848,
        position: 'absolute',
        left: 1700,
        top: 0,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile person={people[1]} />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 848,
        position: 'absolute',
        left: 2550,
        top: 0,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile person={people[2]} />
    </Scene>
  </Storyboard>
)
