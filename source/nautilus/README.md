# Nautilus

> Nautilus is a toolkit for the modern web.  It is a collection of best-of-breed libraries, techniques, and patterns that exist to accelerate front-end web development.

### Nautilus is opinionated.

Nautilus makes the presumption that there is a "correct" structure for reusable DOM patterns.  This means that a large number of the available tools (particularly the [nt-pattern](#nt-pattern) mixin), *require* a particular HTML structure, and we are unabashed in this restriction.  In this respect, it shares many of the same idiosyncracies as [component.io](https://github.com/component/component.github.io), [Polymer](https://www.polymer-project.org/), or [Web Components](http://webcomponents.org/).  We think this is good company to be in.

### Nautilus patterns are verbose.

Nautilus patterns follow a very strict [BEM](http://bem.info/) syntax.  In fact, this dependency is so inherent that the literal HTML elements are largely immaterial.  Provided the BEM classes exist, all CSS and JS attachments should function appropriately, and that's pretty neat.

### Nautilus is components.

Nautilus is, at it's core, focused on components.  Much of the framework is built around standing up the [nt-pattern](#nt-pattern) mixin.  This allows for the rapid implementation of core front-end patterns while obviating the need for boilerplate code. #Winning.

---


## Installation

### Versioning

Nautilus utilizes [Semantic Versioning (2.0.0)](http://semver.org/) for it's versioning schema.  We will endeavour to release non-breaking changes until a major point release dictates we do so.

### Downloading

The best way to get Nautilus is from it's authoritative [Github repo](https://github.com/DigitalBungalow/nautilus).  The tip of master is always safe and current.

~~~ bash
  git clone https://github.com/kaishiro/nautilus.git nautilus
~~~

### Dependencies

We don't believe in re-inventing the wheel, therefore Nautilus does have three hard dependencies: [Sass](http://sass-lang.com), [Bourbon](http://bourbon.io), and [Neat](http://neat.bourbon.io).

Bourbon and Neat are pre-packaged in Nautilus due to the heavy use of their mixin sets to keep the Nautilus codebase lean.  We will release non-breaking minor point updates in concert with each new Bourbon and Neat release.

### Setup

Nautilus is nothing more than a toolkit.  As such, installing Nautilus requires a simple import into your primary stylesheet.

~~~ sass
  @import "nautilus/nautilus";
~~~

## Usage

### Project Organization

Nautilus presumes to live in your stylesheets directory, untouched, for all eternity.  Ideally, you'd mount Nautilus as a [git submodule](http://git-scm.com/docs/git-submodule) to easily receive any baked in goodness in future releases, but we understand that there is an unrequited disdain for submodules on occasion, so won't be pushing it as a solution (unless you want to be like the cool kids).

~~~ bash
  www
  |-- /stylesheets
      |
      |-- all.css.scss
      |
      |-- /nautilus (<-- Yay!)
~~~

The Nautilus directory itself is laid out as follows.  It should be noted that this structure is not only subject to change - it almost assuredly *will* change in future point releases.

~~~ bash
  /nautilus
  |
  |>> _nautilus.scss
  |
  |-- /dependencies
  |
  |-- /helpers
  |
  |-- /libs
  |
  |-- /reset
  |
  |-- /settings
~~~

### _nautilus.scss

The _nautilus.scss file is the primary include point for the rest of the library.  As you can see from the prepending underscore, this file will null generate upon compilation, as will every other file in Nautilus.  By default Nautilus cannot be compiled - it's just a toolkit.  It can only be accessed via a high level import.
