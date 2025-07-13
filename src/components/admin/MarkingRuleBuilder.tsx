"use client";

import { useState } from "react";

interface RuleBuilderProps {
  fileType: string;
}

interface Rule {
  id: string;
  type: string;
  points: number;
  condition: string;
  value: string;
}

const MarkingRuleBuilder = ({ fileType }: RuleBuilderProps) => {
  const [rules, setRules] = useState<Rule[]>([
    {
      id: "1",
      type: "contains",
      points: 5,
      condition: "contains",
      value: "",
    },
  ]);

  const addRule = () => {
    const newRule = {
      id: `rule-${Date.now()}`,
      type: "contains",
      points: 5,
      condition: "contains",
      value: "",
    };
    setRules([...rules, newRule]);
  };

  const removeRule = (id: string) => {
    setRules(rules.filter((rule) => rule.id !== id));
  };

  const updateRule = (id: string, field: string, value: string | number) => {
    setRules(
      rules.map((rule) =>
        rule.id === id
          ? { ...rule, [field]: value }
          : rule
      )
    );
  };

  // Get rule type options based on file type
  const getRuleTypeOptions = () => {
    const commonOptions = [
      { value: "contains", label: "Contains Text" },
      { value: "exactMatch", label: "Exact Text Match" },
    ];

    switch (fileType) {
      case "word":
        return [
          ...commonOptions,
          { value: "formatting", label: "Has Formatting" },
          { value: "style", label: "Uses Style" },
          { value: "structure", label: "Document Structure" },
        ];
      case "excel":
        return [
          ...commonOptions,
          { value: "formula", label: "Contains Formula" },
          { value: "dataValidation", label: "Has Data Validation" },
          { value: "chart", label: "Includes Chart" },
        ];
      case "powerpoint":
        return [
          ...commonOptions,
          { value: "slide", label: "Slide Count" },
          { value: "animation", label: "Has Animation" },
          { value: "template", label: "Uses Template" },
        ];
      case "access":
        return [
          ...commonOptions,
          { value: "table", label: "Has Table" },
          { value: "query", label: "Has Query" },
          { value: "form", label: "Has Form" },
        ];
      default:
        return commonOptions;
    }
  };

  // Get condition options based on rule type
  const getConditionOptions = (ruleType: string) => {
    switch (ruleType) {
      case "contains":
        return [
          { value: "contains", label: "Contains" },
          { value: "notContains", label: "Does Not Contain" },
        ];
      case "exactMatch":
        return [
          { value: "equals", label: "Equals" },
          { value: "notEquals", label: "Does Not Equal" },
        ];
      case "formula":
        return [
          { value: "hasFormula", label: "Has Formula" },
          { value: "formulaResult", label: "Formula Results In" },
        ];
      default:
        return [
          { value: "exists", label: "Exists" },
          { value: "notExists", label: "Does Not Exist" },
        ];
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">
          {fileType.charAt(0).toUpperCase() + fileType.slice(1)} Marking Rules
        </h3>
        <button
          type="button"
          onClick={addRule}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Rule
        </button>
      </div>

      {rules.length === 0 ? (
        <p className="text-gray-500 italic">No rules defined yet. Click 'Add Rule' to create one.</p>
      ) : (
        <div className="space-y-4">
          {rules.map((rule) => (
            <div key={rule.id} className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div className="flex justify-between mb-4">
                <h4 className="font-medium text-gray-700">Rule #{rules.indexOf(rule) + 1}</h4>
                <button
                  type="button"
                  onClick={() => removeRule(rule.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rule Type
                  </label>
                  <select
                    value={rule.type}
                    onChange={(e) => updateRule(rule.id, "type", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    {getRuleTypeOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Condition
                  </label>
                  <select
                    value={rule.condition}
                    onChange={(e) => updateRule(rule.id, "condition", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    {getConditionOptions(rule.type).map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Value
                  </label>
                  <input
                    type="text"
                    value={rule.value}
                    onChange={(e) => updateRule(rule.id, "value", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter value..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Points
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={rule.points}
                    onChange={(e) => updateRule(rule.id, "points", parseInt(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">
            Total Points: {rules.reduce((sum, rule) => sum + rule.points, 0)}
          </span>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkingRuleBuilder;
