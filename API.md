# addWaypoint

Add a waypoint to the route. _Note:_ calling this method requires the
[map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load) to have run.

**Parameters**

-   `index` **Number** position waypoint should be placed in the waypoint array
-   `waypoint` **Array&lt;number&gt; or Point** can be a GeoJSON Point Feature or [lng, lat] coordinates.

Returns **Directions** this;

# getDestination

Returns the destination of the current route.

Returns **Object** destination

# getOrigin

Returns the origin of the current route.

Returns **Object** origin

# getWaypoints

Fetch all current waypoints in a route.

Returns **Array** waypoints

# on

Subscribe to events that happen within the plugin.

**Parameters**

-   `type` **String** name of event. Available events and the data passed into their respective event objects are:-   **clear** `{ type: } Type is one of 'origin' or 'destination'`
    -   **loading** `{ type: } Type is one of 'origin' or 'destination'`
    -   **profile** `{ profile } Profile is one of 'driving', 'walking', or 'cycling'`
    -   **origin** `{ feature } Fired when origin is set`
    -   **destination** `{ feature } Fired when destination is set`
    -   **route** `{ route } Fired when a route is updated`
    -   **error** `{ error } Error as string
-   `fn` **Function** function that's called when the event is emitted.

Returns **Directions** this;

# removeWaypoint

Remove a waypoint from the route.

**Parameters**

-   `index` **Number** position in the waypoints array.

Returns **Directions** this;

# reverse

Swap the origin and destination.

Returns **Directions** this

# setDestination

Sets destination. _Note:_ calling this method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
to have run.

**Parameters**

-   `query` **Array&lt;number&gt; or String** An array of coordinates [lng, lat] or location name as a string.

Returns **Directions** this

# setOrigin

Sets origin. _Note:_ calling this method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
to have run.

**Parameters**

-   `query` **Array&lt;number&gt; or String** An array of coordinates [lng, lat] or location name as a string.

Returns **Directions** this

# setWaypoint

Change the waypoint at a given index in the route. _Note:_ calling this
method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
to have run.

**Parameters**

-   `index` **Number** indexed position of the waypoint to update
-   `waypoint` **Array&lt;number&gt; or Point** can be a GeoJSON Point Feature or [lng, lat] coordinates.

Returns **Directions** this;

# mapboxgl.Directions

A directions component using Mapbox Directions APi

**Parameters**

-   `options` **Object** 
    -   `options.styles` **[Array]** Override default layer properties of the [directions source](https://github.com/mapbox/mapbox-gl-directions/blob/master/src/directions_style.js). Documentation for each property are specified in the [Mapbox GL Style Reference](https://www.mapbox.com/mapbox-gl-style-spec/).
    -   `options.accessToken` **[String]** Required unless `mapboxgl.accessToken` is set globally (optional, default `null`)
    -   `options.profile` **[String]** Routing profile to use. Options: `driving`, `walking`, `cycling` (optional, default `"driving"`)
    -   `options.unit` **[String]** Measurement system to be used in navigation instructions. Options: `imperial`, `metric` (optional, default `"imperial"`)
    -   `options.container` **string or Element** HTML element to initialize the map in (or element id as string). If no container is passed map.getContainer() is used instead.
    -   `options.proximity` **Array&lt;Array&lt;number&gt;&gt;** If set, search results closer to these coordinates will be given higher priority.

**Examples**

```javascript
var directions = new mapboxgl.Directions({
  container: 'directions',
  unit: 'metric',
  profile: 'walking'
});

map.addControl(directions);
```

Returns **Directions** `this`
