---
title: HP Reverb G2 (90Hz)
date: 2020-11-29 13:24:15
---
# HP Reverb G2 (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2020-11-29 13:24:15
  hmdq version: 2.1.1
Output version: 5
    OS version: 10.0.19041.630

... Subsystem: OpenVR ...

OpenVR runtime version: 1.15.12

Recommended render target size: [2248, 2192]

Left eye HAM mesh:
     original vertices: 90, triangles: 30
    optimized vertices: 32, n-gons: 1
             mesh area: 16.51 %

Left eye to head transformation matrix:
    [[ 0.999998, -0.002124, -0.000897, -0.034   ],
     [ 0.002126,  0.999995,  0.002209,  0.000003],
     [ 0.000893, -0.002211,  0.999995,  0.000039]]

Left eye raw LRBT values:
    left:        -1.167639
    right:        0.991869
    bottom:      -1.056352
    top:          1.056971

Left eye raw FOV:
    left:       -49.42 deg
    right:       42.09 deg
    bottom:     -45.22 deg
    top:         45.66 deg
    horiz.:      91.51 deg
    vert.:       90.88 deg

Left eye head FOV:
    left:       -49.37 deg
    right:       42.14 deg
    bottom:     -45.35 deg
    top:         45.53 deg
    horiz.:      91.51 deg
    vert.:       90.88 deg

Right eye HAM mesh:
     original vertices: 90, triangles: 30
    optimized vertices: 32, n-gons: 1
             mesh area: 16.51 %

Right eye to head transformation matrix:
    [[ 0.999998,  0.002126,  0.000892,  0.034   ],
     [-0.002124,  0.999995, -0.002213, -0.000003],
     [-0.000897,  0.002211,  0.999995, -0.000038]]

Right eye raw LRBT values:
    left:        -0.993480
    right:        1.172087
    bottom:      -1.054743
    top:          1.056776

Right eye raw FOV:
    left:       -42.13 deg
    right:       49.53 deg
    bottom:     -45.18 deg
    top:         45.65 deg
    horiz.:      91.66 deg
    vert.:       90.83 deg

Right eye head FOV:
    left:       -42.17 deg
    right:       49.48 deg
    bottom:     -45.05 deg
    top:         45.78 deg
    horiz.:      91.65 deg
    vert.:       90.83 deg

Total FOV:
    horizontal:  98.85 deg
    vertical:    90.85 deg
    diagonal:   107.52 deg
    overlap:     84.31 deg

View geometry:
    left view rotation:     0.2 deg
    right view rotation:   -0.2 deg
    reported IPD:          68.0 mm


```
Recorded and contributed by _knob2001_.

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
[![HP Reverb G2 (90Hz) - top view](../images/ReverbG2_Native_R90_top.dmx.png)](../images/ReverbG2_Native_R90_top.dmx.png)

### Left view
[![HP Reverb G2 (90Hz) - left view](../images/ReverbG2_Native_R90_left.dmx.png)](../images/ReverbG2_Native_R90_left.dmx.png)

### Back view
[![HP Reverb G2 (90Hz) - back view](../images/ReverbG2_Native_R90_back.dmx.png)](../images/ReverbG2_Native_R90_back.dmx.png)

### Full view
[![HP Reverb G2 (90Hz) - full view](../images/ReverbG2_Native_R90_over.dmx.png)](../images/ReverbG2_Native_R90_over.dmx.png)

