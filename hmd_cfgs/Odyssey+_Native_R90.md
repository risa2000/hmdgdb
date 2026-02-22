---
title: Samsung Odyssey+ (90Hz)
date: 2026-02-20 23:54:01
---
# Samsung Odyssey+ (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2026-02-20 23:54:01
  hmdq version: 2.2.1
Output version: 5
    OS version: 10.0.26100.7824

... Subsystem: OpenVR ...

OpenVR runtime version: 2.15.4

Recommended render target size: [1716, 1868]

Left eye HAM mesh:
     original vertices: 168, triangles: 56
    optimized vertices: 69, n-gons: 9
             mesh area: 13.18 %

Left eye to head transformation matrix:
    [[ 0.999998, -0.001501, -0.000989, -0.036036],
     [ 0.001505,  0.999982,  0.004021, -0.00021 ],
     [ 0.000979, -0.004023,  0.999983, -0.00017 ]]

Left eye raw LRBT values:
    left:        -1.329517
    right:        0.943054
    bottom:      -1.405914
    top:          1.435611

Left eye raw FOV:
    left:       -53.05 deg
    right:       43.32 deg
    bottom:     -54.58 deg
    top:         55.14 deg
    horiz.:      96.37 deg
    vert.:      109.72 deg

Left eye head FOV:
    left:       -52.99 deg
    right:       43.38 deg
    bottom:     -54.81 deg
    top:         54.91 deg
    horiz.:      96.37 deg
    vert.:      109.72 deg

Right eye HAM mesh:
     original vertices: 168, triangles: 56
    optimized vertices: 68, n-gons: 8
             mesh area: 13.18 %

Right eye to head transformation matrix:
    [[ 0.999998,  0.001504,  0.000979,  0.036036],
     [-0.001501,  0.999981, -0.004019,  0.000101],
     [-0.000989,  0.004018,  0.999982,  0.0001  ]]

Right eye raw LRBT values:
    left:        -0.942702
    right:        1.335684
    bottom:      -1.405914
    top:          1.435611

Right eye raw FOV:
    left:       -43.31 deg
    right:       53.18 deg
    bottom:     -54.58 deg
    top:         55.14 deg
    horiz.:      96.49 deg
    vert.:      109.72 deg

Right eye head FOV:
    left:       -43.37 deg
    right:       53.12 deg
    bottom:     -54.35 deg
    top:         55.37 deg
    horiz.:      96.49 deg
    vert.:      109.72 deg

Total FOV:
    horizontal: 106.12 deg
    vertical:   109.72 deg
    diagonal:   113.13 deg
    overlap:     86.74 deg

View geometry:
    left view rotation:     0.3 deg
    right view rotation:   -0.3 deg
    reported IPD:          72.1 mm


```
Recorded and contributed by _Zomby_.

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
[![Samsung Odyssey+ (90Hz) - top view](../images/Odyssey+_Native_R90_top.dmx.png)](../images/Odyssey+_Native_R90_top.dmx.png)

### Left view
[![Samsung Odyssey+ (90Hz) - left view](../images/Odyssey+_Native_R90_left.dmx.png)](../images/Odyssey+_Native_R90_left.dmx.png)

### Back view
[![Samsung Odyssey+ (90Hz) - back view](../images/Odyssey+_Native_R90_back.dmx.png)](../images/Odyssey+_Native_R90_back.dmx.png)

### Full view
[![Samsung Odyssey+ (90Hz) - full view](../images/Odyssey+_Native_R90_over.dmx.png)](../images/Odyssey+_Native_R90_over.dmx.png)

