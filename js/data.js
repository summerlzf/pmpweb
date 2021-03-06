
var PMP = {
	data: [{
		area: '4.项目整合管理',
		list: [{
			link: 'IN',
			title: '4.1 制定项目章程',
			in: ['项目工作说明书', '商业论证', '协议', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '引导技术'],
			out: ['项目章程']
		}, {
			link: 'PL',
			title: '4.2 制定项目管理计划',
			in: ['项目章程', '其他过程的输出', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '引导技术'],
			out: ['项目管理计划']
		}, {
			link: 'EX',
			title: '4.3 指导与管理项目执行',
			in: ['项目管理计划', '批准的变更请求', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '项目管理信息系统', '会议'],
			out: ['可交付成果', '工作绩效数据', '变更请求', '项目管理计划更新', '项目文件更新']
		}, {
			link: 'MC',
			title: '4.4 监控项目工作',
			in: ['项目管理计划', '进度预测', '成本预测', '确认的变更', '工作绩效信息', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '分析技术', '项目管理信息系统', '会议'],
			out: ['变更请求', '工作绩效报告', '项目管理计划更新', '项目文件更新']
		}, {
			link: 'MC',
			title: '4.5 实施整体变更控制',
			in: ['项目管理计划', '工作绩效报告', '变更请求', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '会议', '变更控制工具'],
			out: ['批准的变更请求', '变更日志', '项目管理计划更新', '项目文件更新']
		}, {
			link: 'CL',
			title: '4.6 结束项目或阶段',
			in: ['项目管理计划', '验收的可交付成果', '组织过程资产'],
			tt: ['专家判断', '分析技术', '会议'],
			out: ['最终产品、服务或成果移交', '组织过程资产更新']
		}]
	}, {
		area: '5.项目范围管理',
		list: [{
			link: 'PL',
			title: '5.1 规划范围管理',
			in: ['项目管理计划', '项目章程', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '会议'],
			out: ['范围管理计划', '需求管理计划']
		}, {
			link: 'PL',
			title: '5.2 收集需求',
			in: ['范围管理计划', '需求管理计划', '干系人管理计划', '项目章程', '干系人登记册'],
			tt: ['访谈', '焦点小组', '引导式研讨会', '群体创新技术', '群体决策技术', '问卷调查', '观察', '原型法', '标杆', '系统交互图', '文件分析'],
			out: ['需求文件', '需求跟踪矩阵']
		}, {
			link: 'PL',
			title: '5.3 定义范围',
			in: ['范围管理计划', '项目章程', '需求文件', '组织过程资产'],
			tt: ['专家判断', '产品分析', '备选方案生成', '引导式研讨会'],
			out: ['项目范围说明书', '项目文件更新']
		}, {
			link: 'PL',
			title: '5.4 创建工作分解结构',
			in: ['范围管理计划', '项目范围说明书', '需求文件', '事业环境因素', '组织过程资产'],
			tt: ['分解', '专家判断'],
			out: ['范围基准', '项目文件更新']
		}, {
			link: 'MC',
			title: '5.5 确认范围',
			in: ['项目管理计划', '需求文件', '需求跟踪矩阵', '核实的可交付成果', '工作绩效数据'],
			tt: ['检查', '群体决策技术'],
			out: ['验收的可交付成果', '变更请求', '工作绩效信息', '项目文件更新']
		}, {
			link: 'MC',
			title: '5.6 控制范围',
			in: ['项目管理计划', '需求文件', '需求跟踪矩阵', '工作绩效数据', '组织过程资产'],
			tt: ['偏差分析'],
			out: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}, {
		area: '6.项目时间管理',
		list: [{
			link: 'PL',
			title: '6.1 规划进度管理',
			in: ['项目管理计划', '项目章程', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '分析技术', '会议'],
			out: ['进度管理计划']
		}, {
			link: 'PL',
			title: '6.2 定义活动',
			in: ['进度管理计划', '范围基准', '事业环境因素', '组织过程资产'],
			tt: ['分解', '滚动式规则', '专家判断'],
			out: ['活动清单', '活动属性', '里程碑清单']
		}, {
			link: 'PL',
			title: '6.3 排列活动顺序',
			in: ['进度管理计划', '活动清单', '活动属性', '里程碑清单', '项目范围说明书', '事业环境因素', '组织过程资产'],
			tt: ['紧前关系绘图法', '确定依赖关系', '提前与滞后'],
			out: ['项目进度网络图', '项目文件更新']
		}, {
			link: 'PL',
			title: '6.4 估算活动资源',
			in: ['进度管理计划', '活动清单', '活动属性', '资源日历', '风险登记册', '活动成本估算', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '备选方案分析', '发布的估算数据', '自上而下估算', '项目管理软件'],
			out: ['活动资源需求', '资源分解结构', '项目文件更新']
		}, {
			link: 'PL',
			title: '6.5 估算活动持续时间',
			in: ['进度管理计划', '活动清单', '活动属性', '活动资源需求', '资源日历', '项目范围说明书', '风险登记册', '资源分解结构', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '类比估算', '参数估算', '三点估算', '群体决策技术', '储备分析'],
			out: ['活动持续时间估算', '项目文件更新']
		}, {
			link: 'PL',
			title: '6.6 制定进度计划',
			in: ['进度管理计划', '活动清单', '活动属性', '项目进度网络图', '活动资源需求', '资源日历', '活动持续时间估算', '项目范围说明书', '风险登记册', '项目人员分派', '资源分解结构', '事业环境因素', '组织过程资产'],
			tt: ['进度网络分析', '关键路径法', '关键链法', '资源优化技术', '建模技术', '提前与滞后', '进度压缩', '进度计划编制工具'],
			out: ['进度基准', '项目进度计划', '进度数据', '项目日历', '项目管理计划更新', '项目文件更新']
		}, {
			link: 'MC',
			title: '6.7 控制进度',
			in: ['项目管理计划', '项目进度计划', '工作绩效数据', '项目日历', '进度数据', '组织过程资产'],
			tt: ['绩效审查', '项目管理软件', '资源优化技术', '建模技术', '提前与滞后', '进度压缩', '进度计划编制工具'],
			out: ['工作绩效信息', '进度预测', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}, {
		area: '7.项目成本管理',
		list: [{
			link: 'PL',
			title: '7.1 规划成本管理',
			in: ['项目管理计划', '项目章程', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '分析技术', '会议'],
			out: ['成本管理计划']
		}, {
			link: 'PL',
			title: '7.2 估算成本',
			in: ['成本管理计划', '人力资源管理计划', '范围基准', '项目进度计划', '风险登记册', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '类比估算', '参数估算', '自上而下估算', '三点估算', '储备分析', '质量成本', '项目管理软件', '卖方投标分析', '群体决策技术'],
			out: ['活动成本估算', '估算依据', '项目文件更新']
		}, {
			link: 'PL',
			title: '7.3 制定预算',
			in: ['成本管理计划', '范围基准', '活动成本估算', '估算依据', '项目进度计划', '资源日历', '风险登记册', '协议', '组织过程资产'],
			tt: ['成本汇总', '储备分析', '专家判断', '历史关系', '资金限制平衡'],
			out: ['成本基准', '项目资金需求', '项目文件更新']
		}, {
			link: 'MC',
			title: '7.4 控制成本',
			in: ['项目管理计划', '项目资金需求', '工作绩效数据', '组织过程资产'],
			tt: ['挣值管理', '预测', '完工尚需绩效指数', '绩效审查', '项目管理软件', '储备分析'],
			out: ['工作绩效信息', '成本预测', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}, {
		area: '8.项目质量管理',
		list: [{
			link: 'PL',
			title: '8.1 规划质量管理',
			in: ['项目管理计划', '干系人登记册', '风险登记册', '需求文件', '事业环境因素', '组织过程资产'],
			tt: ['成本效益分析', '质量成本', '七个基本质量工具', '标杆对照', '实验设计', '统计抽样', '其他质量规划工具', '会议'],
			out: ['质量管理计划', '过程改进计划', '质量测量指标', '质量核对单', '项目文件更新']
		}, {
			link: 'EX',
			title: '8.2 实施质量保证',
			in: ['质量管理计划', '过程改进计划', '质量测量指标', '质量控制测量结果', '项目文件'],
			tt: ['质量管理和控制工具', '质量审计', '过程分析'],
			out: ['变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}, {
			link: 'MC',
			title: '8.3 控制质量',
			in: ['项目管理计划', '质量测量指标', '质量核对单', '工作绩效数据', '批准的变更请求', '可交付成果', '项目文件', '组织过程资产'],
			tt: ['七个基本质量工具', '统计抽样', '检查', '审查已批准的变更请求'],
			out: ['质量控制测量结果', '确认的变更', '核实的可交付成果', '工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}, {
		area: '9.项目人力资源管理',
		list: [{
			link: 'PL',
			title: '9.1 规划人力资源管理',
			in: ['项目管理计划', '活动资源需求', '事业环境因素', '组织过程资产'],
			tt: ['组织图与职位描述', '人际交往', '组织理论', '专家判断', '会议'],
			out: ['人力资源管理计划']
		}, {
			link: 'EX',
			title: '9.2 组建项目团队',
			in: ['人力资源管理计划', '事业环境因素', '组织过程资产'],
			tt: ['预分派', '谈判', '招募', '虚拟团队', '多标准决策分析'],
			out: ['项目人员分派', '资源日历', '项目管理计划更新']
		}, {
			link: 'EX',
			title: '9.3 建设项目团队',
			in: ['人力资源管理计划', '项目人员分派', '资源日历'],
			tt: ['人际关系技能', '培训', '团队建设活动', '基本规则', '集中办公', '认可与奖励', '人事测评工具'],
			out: ['团队绩效评价', '事业环境因素更新']
		}, {
			link: 'EX',
			title: '9.4 管理项目团队',
			in: ['人力资源管理计划', '项目人员分派', '团队绩效评价', '问题日志', '工作绩效报告', '组织过程资产'],
			tt: ['观察和交流', '项目绩效评估', '冲突管理', '人际关系技能'],
			out: ['变更请求', '项目管理计划更新', '项目文件更新', '事业环境因素更新', '组织过程资产更新']
		}]
	}, {
		area: '10.项目沟通管理',
		list: [{
			link: 'PL',
			title: '10.1 规划沟通管理',
			in: ['项目管理计划', '干系人登记册', '事业环境因素', '组织过程资产'],
			tt: ['沟通需求分析', '沟通技术', '沟通模型', '沟通方法', '会议'],
			out: ['沟通管理计划', '项目文件更新']
		}, {
			link: 'EX',
			title: '10.2 管理沟通',
			in: ['沟通管理计划', '工作绩效报告', '事业环境因素', '组织过程资产'],
			tt: ['沟通技术', '沟通模型', '沟通方法', '信息管理系统', '报告绩效'],
			out: ['项目沟通', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}, {
			link: 'MC',
			title: '10.3 控制沟通',
			in: ['项目管理计划', '项目沟通', '问题日志', '工作绩效数据', '组织过程资产'],
			tt: ['信息管理系统', '专家判断', '会议'],
			out: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}, {
		area: '11.项目风险管理',
		list: [{
			link: 'PL',
			title: '11.1 规划风险管理',
			in: ['项目管理计划', '项目章程', '干系人登记册', '事业环境因素', '组织过程资产'],
			tt: ['分析技术', '专家判断', '会议'],
			out: ['风险管理计划']
		}, {
			link: 'PL',
			title: '11.2 识别风险',
			in: ['风险管理计划', '成本管理计划', '进度管理计划', '质量管理计划', '人力资源管理计划', '范围基准', '活动成本估算', '活动持续时间估算', '干系人登记册', '项目文件', '采购文件', '事业环境因素', '组织过程资产'],
			tt: ['文档审查', '信息收集技术', '核对分析单', '假设分析', '图解技术', 'SWOT分析', '专家判断'],
			out: ['风险登记册']
		}, {
			link: 'PL',
			title: '11.3 实施定性风险分析',
			in: ['风险管理计划', '范围基准', '风险登记册', '事业环境因素', '组织过程资产'],
			tt: ['风险概率和影响评估', '概率影响矩阵', '风险数据质量评估', '风险分类', '风险紧迫性评估', '专家判断'],
			out: ['项目文件更新']
		}, {
			link: 'PL',
			title: '11.4 实施定量风险分析',
			in: ['风险管理计划', '成本管理计划', '进度管理计划', '风险登记册', '事业环境因素', '组织过程资产'],
			tt: ['数据收集和表现技术', '定量风险分析和建模技术', '专家判断'],
			out: ['项目文件更新']
		}, {
			link: 'PL',
			title: '11.5 规划风险应对',
			in: ['风险管理计划', '风险登记册'],
			tt: ['消极风险或威胁的应对策略', '积极风险或机会的应对策略', '应急应对策略', '专家判断'],
			out: ['项目管理计划更新', '项目文件更新']
		}, {
			link: 'MC',
			title: '11.6 控制风险',
			in: ['项目管理计划', '风险登记册', '工作绩效数据', '工作绩效报告'],
			tt: ['风险再评估', '风险审计', '偏差和趋势分析', '技术绩效测量', '储备分析', '会议'],
			out: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}, {
		area: '12.项目采购管理',
		list: [{
			link: 'PL',
			title: '12.1 规划采购管理',
			in: ['项目管理计划', '需求文件', '风险登记册', '活动资源需求', '项目进度计划', '活动成本估算', '干系人登记册', '事业环境因素', '组织过程资产'],
			tt: ['自制或外购分析', '专家判断', '市场调研', '会议'],
			out: ['采购管理计划', '采购工作说明书', '采购文件', '供方选择标准', '自制或外购决策', '变更请求', '项目文件更新']
		}, {
			link: 'EX',
			title: '12.2 实施采购',
			in: ['采购管理计划', '采购文件', '供方选择标准', '卖方建议书', '项目文件', '自制或外购决策', '采购工作说明书', '组织过程资产'],
			tt: ['投标人会议', '建议书评价技术', '独立估算', '专家判断', '广告', '分析技术', '采购谈判'],
			out: ['选定的卖方', '协议', '资源日历', '变更请求', '项目管理计划更新', '项目文件更新']
		}, {
			link: 'MC',
			title: '12.3 控制采购',
			in: ['项目管理计划', '采购文件', '协议', '批准的变更请求', '工作绩效报告', '工作绩效数据'],
			tt: ['合同变更控制系统', '采购绩效审查', '检查与审计', '报告绩效', '支付系统', '索赔管理', '记录管理系统'],
			out: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}, {
			link: 'CL',
			title: '12.4 结束采购',
			in: ['项目管理计划', '采购文件'],
			tt: ['采购审计', '采购谈判', '记录管理系统'],
			out: ['结束的采购', '组织过程资产更新']
		}]
	}, {
		area: '13.项目干系人管理',
		list: [{
			link: 'IN',
			title: '13.1 识别干系人',
			in: ['项目章程', '采购文件', '事业环境因素', '组织过程资产'],
			tt: ['干系人分析', '专家判断', '会议'],
			out: ['干系人登记册']
		}, {
			link: 'PL',
			title: '13.2 规划干系人管理',
			in: ['项目管理计划', '干系人登记册', '事业环境因素', '组织过程资产'],
			tt: ['专家判断', '会议', '分析技术'],
			out: ['干系人管理计划', '项目文件更新']
		}, {
			link: 'EX',
			title: '13.3 管理干系人参与',
			in: ['干系人管理计划', '沟通管理计划', '变更日志', '组织过程资产'],
			tt: ['沟通方法', '人际关系技能', '管理技能'],
			out: ['问题日志', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}, {
			link: 'MC',
			title: '13.4 控制干系人参与',
			in: ['项目管理计划', '问题日志', '工作绩效数据', '项目文件'],
			tt: ['信息管理系统', '专家判断', '会议'],
			out: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新', '组织过程资产更新']
		}]
	}],

	process: {}, // 过程组缓存
	listByProcess: function(proc) {
		var p = this.process, list = [];
		if(p[proc] && p[proc].length) {
			return p[proc];
		}
		for(var area of this.data) {
			for(var obj of area.list) {
				if(obj.link == proc) {
					list.push(obj);
				}
			}
		}
		p[proc] = list;
		return list;
	}
};