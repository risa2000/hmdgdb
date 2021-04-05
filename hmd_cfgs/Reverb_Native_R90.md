---
title: HP Reverb (90Hz)
date: 2019-09-30 18:36:56
---
# HP Reverb (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2019-09-30 18:36:56
  hmdq version: 1.3.1
Output version: 4
    OS version: 10.0.18362.356

... Subsystem: OpenVR ...

OpenVR runtime version: 1.7.15

Recommended render target size: [1608, 1576]

Left eye HAM mesh:
     original vertices: 42, triangles: 14
    optimized vertices: 24, n-gons: 6
             mesh area: 0.04 %

Left eye to head transformation matrix:
    [[ 0.999995, -0.000054, -0.000897, -0.029494],
     [ 0.000052,  0.999997, -0.001226,  0.00049 ],
     [ 0.000897,  0.001226,  0.999995, -0.000346]]

Left eye raw LRBT values:
    left:        -1.108628
    right:        0.946306
    bottom:      -1.003369
    top:          1.010052

Left eye raw FOV:
    left:       -47.95 deg
    right:       43.42 deg
    bottom:     -45.10 deg
    top:         45.29 deg
    horiz.:      91.37 deg
    vert.:       90.38 deg

Left eye head FOV:
    left:       -47.90 deg
    right:       43.47 deg
    bottom:     -45.03 deg
    top:         45.36 deg
    horiz.:      91.37 deg
    vert.:       90.38 deg

Right eye HAM mesh:
     original vertices: 42, triangles: 14
    optimized vertices: 24, n-gons: 6
             mesh area: 0.04 %

Right eye to head transformation matrix:
    [[ 0.999995,  0.000051,  0.000897,  0.029494],
     [-0.000053,  0.999997,  0.001225, -0.000491],
     [-0.000897, -0.001225,  0.999995,  0.000354]]

Right eye raw LRBT values:
    left:        -0.947934
    right:        1.107410
    bottom:      -0.997196
    top:          1.019531

Right eye raw FOV:
    left:       -43.47 deg
    right:       47.92 deg
    bottom:     -44.92 deg
    top:         45.55 deg
    horiz.:      91.39 deg
    vert.:       90.47 deg

Right eye head FOV:
    left:       -43.52 deg
    right:       47.87 deg
    bottom:     -44.99 deg
    top:         45.48 deg
    horiz.:      91.39 deg
    vert.:       90.47 deg

Total FOV:
    horizontal:  95.76 deg
    vertical:    90.43 deg
    diagonal:   111.78 deg
    overlap:     86.99 deg

View geometry:
    left view rotation:     0.2 deg
    right view rotation:   -0.2 deg
    reported IPD:          59.0 mm


```
Recorded and contributed by _dillanski_.

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
[![HP Reverb (90Hz) - top view](../images/Reverb_Native_R90_top.dmx.png)](../images/Reverb_Native_R90_top.dmx.png)

### Left view
[![HP Reverb (90Hz) - left view](../images/Reverb_Native_R90_left.dmx.png)](../images/Reverb_Native_R90_left.dmx.png)

### Back view
[![HP Reverb (90Hz) - back view](../images/Reverb_Native_R90_back.dmx.png)](../images/Reverb_Native_R90_back.dmx.png)

### Full view
[![HP Reverb (90Hz) - full view](../images/Reverb_Native_R90_over.dmx.png)](../images/Reverb_Native_R90_over.dmx.png)

