---
title: HP Reverb
date: 2019-08-25 22:44:41
---
# HP Reverb

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
    Time stamp: 2019-08-25 22:44:41
  hmdq version: 1.0.2
Output version: 3
    OS version: 10.0.18362.295
OpenVR version: 1.7.9

Recommended render target size: [2276, 2228]

Left eye HAM mesh:
     original vertices: 42, triangles: 14
    optimized vertices: 24, n-gons: 6
             mesh area: 0.04 %

Left eye to head transformation matrix:
    [[ 9.99998808e-01 -2.78193242e-04  1.04175194e-03 -3.34944092e-02]
     [ 2.78580410e-04  9.99996662e-01 -4.97577188e-04  5.45609568e-04]
     [-1.04131771e-03  4.98283771e-04  9.99996424e-01 -2.50589306e-04]]

Left eye raw LRBT values:
    left:        -1.102668
    right:        0.944358
    bottom:      -1.002467
    top:          1.007847

Left eye raw FOV:
    left:       -47.80 deg
    right:       43.36 deg
    bottom:     -45.07 deg
    top:         45.22 deg
    horiz.:      91.16 deg
    vert.:       90.29 deg

Left eye head FOV:
    left:       -47.86 deg
    right:       43.30 deg
    bottom:     -45.04 deg
    top:         45.25 deg
    horiz.:      91.16 deg
    vert.:       90.29 deg

Right eye HAM mesh:
     original vertices: 42, triangles: 14
    optimized vertices: 23, n-gons: 5
             mesh area: 0.04 %

Right eye to head transformation matrix:
    [[ 9.99998868e-01  2.78601219e-04 -1.04131934e-03  3.34942900e-02]
     [-2.78217252e-04  9.99996662e-01  4.98507288e-04 -5.46843046e-04]
     [ 1.04175787e-03 -4.97838017e-04  9.99996543e-01  2.51465535e-04]]

Right eye raw LRBT values:
    left:        -0.944502
    right:        1.112957
    bottom:      -0.995849
    top:          1.018947

Right eye raw FOV:
    left:       -43.37 deg
    right:       48.06 deg
    bottom:     -44.88 deg
    top:         45.54 deg
    horiz.:      91.43 deg
    vert.:       90.42 deg

Right eye head FOV:
    left:       -43.31 deg
    right:       48.12 deg
    bottom:     -44.91 deg
    top:         45.51 deg
    horiz.:      91.43 deg
    vert.:       90.42 deg

Total FOV:
    horizontal:  95.97 deg
    vertical:    90.36 deg
    diagonal:   111.91 deg
    overlap:     86.61 deg

View geometry:
    left panel rotation:    -0.2 deg
    right panel rotation:    0.2 deg
    reported IPD:           67.0 mm

```
Recorded and contributed by _nukular_.

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
[![HP Reverb - top view](../images/Reverb_Native_top.dmx.png)](../images/Reverb_Native_top.dmx.png)

### Left view
[![HP Reverb - left view](../images/Reverb_Native_left.dmx.png)](../images/Reverb_Native_left.dmx.png)

### Back view
[![HP Reverb - back view](../images/Reverb_Native_back.dmx.png)](../images/Reverb_Native_back.dmx.png)

### Full view
[![HP Reverb - full view](../images/Reverb_Native_over.dmx.png)](../images/Reverb_Native_over.dmx.png)

