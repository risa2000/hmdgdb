---
title: About
---

# About this project

The original motivation was coming from the vague, misleading or outright wrong
information spread by the headset manufacturers about the view geometry (and
the field of view a.k.a. FOV in particular) of their products. There were some
attempts to assess these characteristics empirically by measuring the visible
angular range, either by using some sophisticated equipment, or by using a VR
application, but these approaches were typically difficult to reproduce.

On the other hand, the view geometry in general and the rendered FOVs in
particular are something, which the headset advertises to the application, and
therefore are readily available. In fact, there is no way for an application to
render the scene without it. These parameters are pretty much defined by the
headset design (mechanical and optical) and as such give an important
information about the headset capabilities.

Technically, the geometry which the headset advertises may differ from what the
user observes in the end. There are known cases where the headset specifies a
larger FOV than what is then visible to the user, so going solely by the
rendered (advertised) FOV does not give the whole story. It however clearly
defines the limits, because the application only renders what the headset asks
for, and therefore the user can only observe as much.

If the headset asks the application to render more than what it is capable of
showing to the user (for various design constraints), then it just wastes the
precious resources spent in the rendering for nothing. So there is a strong
incentive for everyone to keep the rendered FOV only as big as what the headset
can display and the user can observe.

From this perspective, the view geometry collected from the headsets provides a
reasonable base for an objective comparison of the headsets capabilities.

If you would like to participate, read [Contributing](/contributing.md).
