import React, { InputHTMLAttributes, ReactElement, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /**是否禁用Input */
    disabled?: boolean;
    /**设置Input大小，支持 lg 或者 sm */
    size?: InputSize;
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /**添加前缀，用于配置一些固定组合 */
    prepend?: string | ReactElement;
    /**添加后缀，用于配置一些固定组合 */
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
    // 取出各种属性
    const { disabled, size, icon, prepend, append, style, ...restProps } = props
    // 根据属性计算不同className
    const cnames = classNames('xing-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    /*
    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return ''
        }
        return value
    }
    if('value' in props) {
        delete restProps.defaultValue
        restProps.value = fixControlledValue(props.value)
    }
    */
    return (
        // 根据属性判断是否添加特定的节点
        <div className={cnames} style={style}>
            {prepend && <div className="xing-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
            <input className="xing-input-inner" disabled={disabled} {...restProps} />
            {append && <div className="xing-input-group-append">{append}</div>}
        </div>
    )
}

export default Input
