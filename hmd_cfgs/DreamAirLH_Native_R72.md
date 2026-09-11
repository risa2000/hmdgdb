---
title: Pimax Dream Air LH (72Hz)
date: 2026-09-10 16:04:30
---
# Pimax Dream Air LH (72Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2026-09-10 16:04:30
  hmdq version: 2.2.1
Output version: 5
    OS version: 10.0.19041.3693

... Subsystem: OpenVR ...

OpenVR runtime version: 2.16.7

Recommended render target size: [5188, 4168]

Left eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 3.49 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.036   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.432247
    right:        1.019034
    bottom:      -0.984291
    top:          0.984291

Left eye head FOV:
    left:       -55.08 deg
    right:       45.54 deg
    bottom:     -44.55 deg
    top:         44.55 deg
    horiz.:     100.62 deg
    vert.:       89.09 deg

Right eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 3.49 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.036   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.019034
    right:        1.432246
    bottom:      -0.984291
    top:          0.984291

Right eye head FOV:
    left:       -45.54 deg
    right:       55.08 deg
    bottom:     -44.55 deg
    top:         44.55 deg
    horiz.:     100.62 deg
    vert.:       89.09 deg

Total FOV:
    horizontal: 110.15 deg
    vertical:    89.09 deg
    diagonal:   114.30 deg
    overlap:     91.08 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          72.0 mm


```
Recorded and contributed by _anonymous_.

## Rendered FOV visualizations

Following images show different views of a rendered FOV visualization of a
particular model in a particular configuration (if there are more available).
The images are rendered to the same scale (when possible) to make them easier
to compare. The _top_, _left_, and _back_ views are rendered with an
orthographic projection to preserve the visual size over the different renders.
The overall view (_full_) uses the perspective projection. Each image is marked
with the information describing the headset configuration and the other aspects
of the image.

### Visualization rules

* Headsets which define the _hidden area mask (HAM)_ are rendered with it. The
  HAM also impacts the calculated FOV points (the red "clown noses" spread
  around the edge of the HAM or the viewing frame).

* Headsets without the HAM have the view rendered with the wireframe only, which
  visualizes the tip of the viewing frustum.

* The FOV points and the subsequent FOV triangles are calculated and visualized
  according to [these
  rules](https://risa2000.github.io/vrdocs/docs/hmd_fov_calculation).

* Viewing frustums are clipped by the _z-clipping plane_ at the same fixed
  distance, so the projected areas on the chequerboard in _back_ and _full_
  views are on the same scale and directly comparable between different
  configurations or headsets.

* For the same reason the interpupillary distance (IPD) is fixed at the same
  value for all headsets.

* Headsets which use canted views and can operate in both modes (native and
  parallel) are rendered with a green HAM projection, which shows the shape of
  the native HAM (rendered in blue) projected to the "normalized"
  (checkerboard) plane parallel to the face. Those green native projections are
  then directly comparable either to the parallel mode HAMs (rendered in red)
  of the same model, or to the native HAMs of the other (traditional) headsets
  which use only the parallel views by design and as such are also rendered
  into the parallel (checkerboard) plane.

### Top view
[![Pimax Dream Air LH (72Hz) - top view](../images/DreamAirLH_Native_R72_top.dmx.png)](../images/DreamAirLH_Native_R72_top.dmx.png)

### Left view
[![Pimax Dream Air LH (72Hz) - left view](../images/DreamAirLH_Native_R72_left.dmx.png)](../images/DreamAirLH_Native_R72_left.dmx.png)

### Back view
[![Pimax Dream Air LH (72Hz) - back view](../images/DreamAirLH_Native_R72_back.dmx.png)](../images/DreamAirLH_Native_R72_back.dmx.png)

### Full view
[![Pimax Dream Air LH (72Hz) - full view](../images/DreamAirLH_Native_R72_over.dmx.png)](../images/DreamAirLH_Native_R72_over.dmx.png)

