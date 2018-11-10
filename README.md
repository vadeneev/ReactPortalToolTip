# React Portal ToolTip

Watch demo [here](https://vadeneev.github.io/ReactPortalToolTip/index.html)

Simple React JS 16+ tooltip:

  - Renders through portal
  - Fit screen bounds
  - Ready to work
  - Tested with ie11+ 
  - Hover and click(touch)
  
# Simple declarative usage:

```
<PortalTipContainer>

  <PortalTipContent>
    Just simple text in tooltip.
  </PortalTipContent>

  <div className="demo-box">1</div>
  
</PortalTipContainer>
```
## PortalTipContainer props
| Name                |Meaning|propType (default)|
|----------------|-------------------------------|-----------------------------|
|hideDelay| close delay (ms) |number or string (0)
|autoHide| should close after losing focus|bool (true)
|willCloseCallback| callback for close| func
|children|all wrapped elements| node
|containerClassNames|extra classes for container|string ('')
|forceShowToolTip|--not implemented-- (controlled show/hide)|bool
|disableHoverShow| --not implemented--|bool

## PortalTipContent props
| Name                |Meaning|propType (default)|
|----------------|-------------------------------|-----------------------------|
|showArrow			|should it render 'arrow'            |bool (true)            |
|width				|fixed width            |string  (auto)          |
|max-width				|set max-width            |string (auto)           |
|extraBodyClass|extra class for content|string ('')           |
|children|all that wrapped by component|any|
|position|direction for tooltip (top, bottom, left, right)|string (top)|
|targetElement|point to|object (node pass through parent)|
